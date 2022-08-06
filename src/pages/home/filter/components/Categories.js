import * as React from "react";
// import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { TreeView } from "@mui/lab";
import { Skeleton } from "@mui/material"
import axios from "axios";
import { Link } from "react-router-dom";
import { filterActions, getFilter } from "../../../../redux/reducers/filterSlice";
import { useDispatch } from "react-redux";
import { searchActions } from "../../../../redux/reducers/searchSlice";

export default function Categories({categories}) {

  const dispatch = useDispatch()
  
  

  const filterByCategory = ({value}) =>{
    dispatch(filterActions.setSearch({name:"category", value:value}))
    // dispatch(getFilter("nothing") )
  }
  return (
    <TreeView
      
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ flexGrow: 1, overflowY: "auto" }}
      //   sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {categories?
        categories?.map((d) => (
            <TreeItem  sx={{marginBottom:1}} nodeId={`${d.id}`} label={d.name} key={d.id} onClick={()=>filterByCategory({value:d.id})}  >
            {/* <TreeItem  sx={{marginBottom:2}} nodeId={`${d.id}`} label={d.name} key={index} onClick={()=> dispatch(getFilter( "category" ,d.id))}  > */}
                {/* {products?.filter((i)=>i.category.name === d.name).map((p, index1)=>(
                    <Link key={index1} to={`/products/${p.id}`} style={{ color: 'black', textDecoration: 'none'}}>
                    <TreeItem sx={{marginBottom:1, textDecoration: "none"}} nodeId={`${d.id}.${p.id}`} label={p.name}  />
              </Link>
                ))} */}
            </TreeItem>
         )): <><Skeleton width="50%"></Skeleton>
         <Skeleton width="50%"></Skeleton>
         <Skeleton width="50%"></Skeleton></>}
    </TreeView>
  );
}
