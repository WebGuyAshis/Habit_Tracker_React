// Setting User 
export const activeUser = (user)=>{
    return{
        type: "SET_USER",
        payload: user
    }
}

// export Create Box 

export const createBox = (val)=>{
    console.log("from Action BOX:", val);
    return{
        type: "HANDLE_CREATE_BOX",
        payload: val
    }
}
