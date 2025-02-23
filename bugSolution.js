```javascript
try{
  //Correct Usage of $inc operator with proper error handling
  const result = await db.collection.updateOne({name:"John"},{$inc:{age:1}});
  if(result.modifiedCount === 0){
    console.error("No documents updated");
  }else{
    console.log("Document updated successfully");
  }
}catch(error){
  console.error("Error updating document:",error);
}
```