function NewTask({createTask}) {
  const onSubmit = e => {
    e.preventDefault();
    createTask(
      e.target.elements[0].value,
      e.target.elements[1].value
    );
  }

  return (
    
    <div class="isolate -space-y-px rounded-md shadow-sm mt-24 ">
      <div class="sm:flex-auto">
        <h1 class="text-center text-xl font-semibold text-gray-900 mb-2">Create a new task</h1>
        <p class="text-center mt-2 text-sm text-gray-700 mb-12">A list of all the tasks in your account including their name, author, date.</p>
     </div>
      <form onSubmit={e => onSubmit(e)} action="#" id="new-task" className="flex justify-center">
        <div class="isolate -space-y-px rounded-md shadow-sm lg:w-1/2">
          <div class="relative bg-sky-200 border border-green-600 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-sky-400 focus-within:border-sky-400">
            <label for="name" class="inline text-xs font-medium text-gray-900">Task Title</label>
            <input type="text" name="name" id="task-author" class="flex bg-sky-200 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Jane Doe"/>
          </div>
          <div class="relative bg-green-50 border border-green-600 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-sky-400 focus-within:border-sky-400">
            <label for="job-title" class="inline text-xs font-medium text-gray-900">Author</label>
            <input type="text" name="job-title" id="task-content" class="flex border-0 p-0 text-gray-900 bg-green-50 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Shop Grocery"/>
          </div>
        </div>
        <div className="justify-center mt-12">
        <button type="submit" class="inline-flex items-center p-1 border border-transparent rounded-sm shadow-sm text-white bg-sky-400 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400">
          <svg class="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
        </button> 
        </div>
      </form>
    </div>  

    
  );
}

export default NewTask;


