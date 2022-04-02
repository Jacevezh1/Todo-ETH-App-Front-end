const formatDate = rawDate => {
  if (!rawDate) { return '' }
  const _date = new Date(parseInt(rawDate));
  const date = `${_date.getDate() + 1}/${_date.getMonth() + 3}/${2022}`;
  const time = `${_date.getHours()}h ${_date.getMinutes()}m`; 
  return `${date} - ${time}`;
};

function TaskList({tasks, toggleDone}) {
  
  const renderTask = task => (
    <tr key={task.id}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">{task.id.toString()}</td>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">{formatDate(task.date.toString())}</td>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">{task.content}</td>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">{task.author}</td>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
        <input
          type='checkbox'
          onChange={() => toggleDone(task.id.toString())}
          checked={!!task.done}
        />
      </td>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">{task.dateComplete.toString() !== '0' ? formatDate(task.dateComplete.toString()) : ''}</td>
    </tr>
  );
  
  return (
  <div class="px-4 sm:px-6 lg:px-8 mt-24 lg:mt-36 mb-12">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-center text-xl font-semibold text-gray-900">Tasks</h1>
      <p class="text-center mt-2 text-sm text-gray-700">A collection of your pending tasks & completed ones.</p>
    </div>
  </div>
  <div class="mt-8 flex flex-col">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300">
            
            <thead class="bg-sky-300">
              <tr>
                <th scope="col" class="font-bold py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">ID</th>
                <th scope="col" class="font-bold px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                <th scope="col" class="font-bold px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Content</th>
                <th scope="col" class="font-bold px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Author</th>
                <th scope="col" class="font-bold px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Done</th>
                <th scope="col" class="font-bold px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date Complete</th>
              </tr>
            </thead>

            <tbody class="bg-green-50 ml-2 justify-center">
              {tasks && tasks.map((task) => renderTask(task))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  </div>
  </div>

  );
};

export default TaskList; 