import server from "./";

export const getTasksResult = async (params, headers) => {
    const { data: response } = await server.get('/tasks', {params, headers});
    return response;
}

export const createTaskResult = async (payload, headers) => {
    const { data: response } = await server.post('/tasks', payload, {headers});
    return response;
}

export const updateTaskResult = async (payload, headers) => {
    const {taskId, isCompleted} = payload
    const { data: response } = await server.put(`/tasks/${taskId}`, {isCompleted}, {headers});
    return response;
}
