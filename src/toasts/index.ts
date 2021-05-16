const TOASTS = (action:"LABEL_ADDED")=> {

    switch(action){
        case "LABEL_ADDED":
            return  {
                title: "Submission Added",
                description: "Newly submitted data is under review",
                status: "success",
                duration: 4000,
                isClosable: true,
            }
    }
}



export default TOASTS