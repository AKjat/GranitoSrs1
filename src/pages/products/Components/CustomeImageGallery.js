import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function CustomeImageGallery({value,handleChange}) {
  const [open, setOpen] = React.useState(false);
//   const [category, setCategory] = React.useState([]);
//   const loading = open && category.length === 0;
//   const [newcategory, setNewcategory] = React.useState([])
//   const handleCategory = (event,value) =>{
//     setNewcategory(value)
//     let e  = {
//       target:{value:value.id,name:'category'}
//     }
//     handleChange(e)
//   }
//   React.useEffect(() => {
//     async function fetchInitialData() {
//       const leadcategory = await getCategory();
//       setCategory(leadcategory);
//       if (value){
//         let categories = leadcategory.findIndex(e=>e.id==value);
//         setNewcategory(leadcategory[categories])}
//     }
//     fetchInitialData();
// //   }, []);
//   React.useEffect(() => {
    
//   }, [newcategory, category, value])


  return (
    <ImageGallery
      name="category"
      open={open}
      value={newcategory}
      fullWidth
      size="small"
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      
      options={category}
      loading={loading}
      onChange={handleCategory}
        
    />
  );
}
// export CustomeImageGallery