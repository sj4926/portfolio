<template>
<div class="admin">
  <h1>Add an Entry!</h1>
    <div class="heading">
      <h2>Add an Entry with a date and a photo</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="title" placeholder="Date mm/dd/yyy">
        <br/>
        <textarea v-model="description" placeholder="Entry"></textarea>
        <p></p>
        <input type="file" name="photo" @change="fileChanged">
        <br/>
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addItem">
        <h2>{{addItem.title}}</h2>
        <p>{{addItem.description}}</p>
        <img :src="addItem.path" />
      </div>
    </div>
    <div class="heading">
      <h2>Edit/Delete an Entry</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.title}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findItem">
        <input v-model="findItem.title">
        <p></p>
        <textarea v-model="findItem.description"></textarea>
        <p></p>
        <img :src="findItem.path" />
      </div>
      <div class="actions" v-if="findItem">
        <button @click="deleteItem(findItem)">Delete</button>
        <button @click="editItem(findItem)">Edit</button>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
      title: "",
      items: [],
      file: null,
      addItem: null,
      findTitle: "",
      findItem: null,
    }
  },
  computed: {
    suggestions() {
      let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      return items.sort((a, b) => a.title > b.title);
    }
  },
  created() {
    this.getItems();
  },
  methods: {
     fileChanged(event) {
       this.file = event.target.files[0]
     },
     async upload() {
        try {
          const formData = new FormData();
          formData.append('photo', this.file, this.file.name)
          let r1 = await axios.post('/api/photos', formData);
          let r2 = await axios.post('/api/items', {
            title: this.title,
            description: this.description,
            path: r1.data.path
          });
          this.addItem = r2.data;
        } catch (error) {
          console.log(error);
        }
      },
      async getItems() {
        try {
          let response = await axios.get("/api/items");
          this.items = response.data;
          return true;
        } catch (error) {
          console.log(error);
        }
      },
      selectItem(item) {
        this.findTitle = "";
        this.findItem = item;
      },
      async deleteItem(item) {
        try {
          await axios.delete("/api/items/" + item._id);
          this.findItem = null;
          this.getItems();
          return true;
        } catch (error) {
          console.log(error);
        }
      },
      async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          title: this.findItem.title,
          description: this.findItem.description,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
   }
}
</script>

<style scoped>

.content{
  text-align: center;
}

.admin{
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  padding-left: 30%;
  padding-right: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  width: auto;
}

textarea,
select,
button{
  border-radius: 15px;
}

button {
  background-color: #E76E0A;
}

textarea {
  height: 150px;
  width: auto;

}

.form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: auto;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
</style>
