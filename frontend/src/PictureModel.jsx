import { useState } from "react"

export const PictureModel = () =>{
  const [isOpen,setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Open a Picture Model</button>
      {isOpen && <Model setIsOpen={setIsOpen}/>}
    </>
  )

}


const Model = ({setIsOpen}) =>{
  const [image,setImage] = useState(null);

  const imageInput = (e) =>{
    if(e.target.files){

      const selectedImage = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          setImage(fileReader.result);
        }
      };
      fileReader.readAsDataURL(selectedImage);
    };
    }
  
  return(
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="p-2 rounded w-2/4">
        <div className="relative rounded-lg shadow bg-gray-700">
          <button type="button" onClick={() => setIsOpen(false)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Close</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Image Preview</h3>
            
              <div>
                <input type="file" accept="image/jpg, image/jpeg, image/png" alt="file upload" onChange={imageInput} />
              </div>
              {
              image && 
              <div className="mt-3">
                <img className="w-full h-auto max-h-[85vh] object-contain" src={image} alt="image" />
              </div>
              }
          </div>
        </div>
      </div>
    </div>
  )

}

