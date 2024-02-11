import React from 'react'

const Task = () => {
    return (
        <div>
            <div class="flex items-center">
                <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    style={{ borderRadius: '50%', clipPath: 'circle(50%)' }}
                />
                <label for="checked-checkbox" class="text-sm font-medium text-gray-900 dark:text-gray-300">Checked sta</label>
            </div>
        </div>
    )
}

export default Task