// Define the API endpoint
const apiEndpoint = 'http://localhost:8080/hello';

// Function to call the Spring Boot API and log the response
async function fetchGreeting() {
    try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
        }
        const data = await response.text();  // assuming the response is text
        console.log(data);  // should log "Hello, Spring Boot!" if using the previous Spring Boot example
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
}

// Call the function
fetchGreeting();
