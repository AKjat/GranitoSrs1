import * as React from "react";
// import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { TreeView } from "@mui/lab";
import { Skeleton } from "@mui/material"
import { useDispatch } from "react-redux";
import { filterActions } from "../Reducers/filterSlice";

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
            </TreeItem>
         )): <><Skeleton width="50%"></Skeleton>
         <Skeleton width="50%"></Skeleton>
         <Skeleton width="50%"></Skeleton></>}
    </TreeView>
  );
}
