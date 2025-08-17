import { supabase } from "../supabaseClient";

// Get task of the user 
export async function fetchTasks(userId){
        const {data, error} = await supabase
        .from('tasks')
        .select('*')
        .eq("user_id", userId)
        .order('created_at', {ascending: false});
    if(error) throw error;
    return data || [];
}


// Add a new task to the user
export async function createTask(userId, payload){
    const {data, error} = await supabase
    .from('tasks')
    .insert([{ user_id: userId,...payload  }])
    .select()
    .single();
    if(error) throw error;
    return data;
}

//Delete task from the user

export async function deleteTask(taskId){
    const {error} = await supabase
    .from('tasks')
    .delete()
    .eq("id", taskId)
    .single();
    if(error) throw error;
}


// Mark a task as completed

export async function markComplete(taskId){
    const nowISO = new Date().toISOString();
    const {data, error} = await supabase
    .from('tasks')
    .update({end_date: nowISO,updated_at: nowISO})
    .eq("id", taskId)
    .single();
    if(error) throw error;
    return data;
}