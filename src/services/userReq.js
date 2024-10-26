// Import the necessary constants
import { SERVICE_URL } from "./service";

// Add the following machine-related functions
export const addMachine = async (data) => {
    const response = await fetch(`${SERVICE_URL}user`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
    });
    return response.json();
};

export const getMachine = async () => {
    const response = await fetch(`${SERVICE_URL}user`);
    return response.json();
};

export const updateMachine = async (name, data) => {
    const response = await fetch(`${SERVICE_URL}user/${name}`, {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(data),
    });
    return response.json();
};

export const deleteMachine = async (name) => {
    const response = await fetch(`${SERVICE_URL}user/${name}`, {
        method: "DELETE",
    });
    return response.json();
};

// Optionally define and export the `UserRequest` function if needed
export const UserRequest = async (data) => {
    // Implement the logic for user request handling here
    const response = await fetch(`${SERVICE_URL}user/request`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
    });
    return response.json();
};
