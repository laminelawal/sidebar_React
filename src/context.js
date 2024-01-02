import React, { useState , useContext} from "react"

const AppContext = React.createContext();


function AppProvider({children}){
    const [isOpenSideBar, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openSidebar(){
        setIsSidebarOpen(true)
    }

    function closeSidebar(){
         setIsSidebarOpen(false)
    }

     function openModal(){
         return setIsModalOpen(true)
     }

     function closeModal(){
         return setIsModalOpen(false)
     }

    return (
    <AppContext.Provider value={{
        isOpenSideBar,
        openSidebar,
        closeSidebar,
        isModalOpen,
        openModal,
        closeModal
    }}>
        {children}
    </AppContext.Provider>
    );
};

const useGlobalContext = ()=>{
   return  useContext(AppContext)
}

export  {useGlobalContext, AppProvider};