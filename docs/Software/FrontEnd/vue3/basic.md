# VUE3
 
- init npm init vue@latest ... npm install ... npm run dev
- ref
- reactive
- start a project
- option api vs compostion api data => ref reactive

```
<template>
 {{todoList}}
</template>
<script>
export default {
 setup(){
  let todoList = [
   {todo:"我想看海",isCheck:false},
   {todo:"我想浪漫",isCheck:true},
  ]
  return{
   todoList,
  }
 }
}
</script>
```

```
<template>
 {{todoList}}
</template>
<script setup>
 let todoList = [
  {todo:"我想看海",isCheck:false},
  {todo:"我想浪漫",isCheck:true},
 ]
</script>
```