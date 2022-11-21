<template>
  <div id="add_product">
    <h3>Add Product</h3>

    <div id="upload_product">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="form.title"
          label="Title"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="number"
          v-model="form.price"
          label="Price"
          lazy-rules
        />
        <q-select v-model="form.category" :options="options" label="Category" />

        <q-input
          v-model="file"
          @update:model-value="fileUpload(value)"
          filled
          type="file"
        />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup>
//reactivity in composition API
//ref internally uses reactive(). few differences but overall ref.
import { ref, reactive } from "vue";

import {
  getStorage,
  firebaseref,
  uploadBytesResumable,
  getDownloadURL,
  collection,
  addDoc,
  db,
} from "@/firebase.js";

const options = ref(["Shoes", "Trousers", "T-shirts"]);

//referring to file
const file = ref(null);

//reactive a good option if you want to group the reactive data as an object.
const form = reactive({
  title: "",
  price: 0,
  category: "",
  imageUrl: "",
});

const fileUpload = () => {
  const filedata = file.value[0];
  // Upload file and metadata to the object 'images/mountains.jpg
  const storage = getStorage();
  const storageRef = firebaseref(storage, "products/" + filedata.name);
  const uploadTask = uploadBytesResumable(storageRef, filedata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      console.log("error:", error);
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        form.imageUrl = downloadURL;
        console.log(form);
      });
    }
  );
};

const onSubmit = async () => {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "vuestore101"), form);
  console.log("Document written with ID: ", docRef.id);
};
</script>

<style scoped>
#add_product {
  padding: 3%;
}

#upload_product {
  width: 50%;
}
</style>
