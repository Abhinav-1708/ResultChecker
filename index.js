document.getElementById("resultForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const semester = document.getElementById("semester").value;
    const rollNumber = document.getElementById("rollNumber").value;
    const year = document.getElementById("year").value;
    // Generate the result URL based on user input
    const resultURL = `https://erp.iiitkottayam.ac.in/php/${year}/${semester}/${rollNumber}.html`;

    // Set the iframe source to the generated result URL
    const resultFrame = document.getElementById("resultFrame");
    resultFrame.src = resultURL;
});

document.getElementById("year").addEventListener("change", function(event) {   
    const year = document.getElementById("year").value;
    const date = new Date();
    const currentYear = date.getFullYear();
    const noOfSemesters = (currentYear - year) * 2;
    const semesterSelect = document.getElementById("semester");

    // Clear existing options in the select element
    semesterSelect.innerHTML = "";

    for(let i = 1; i <= noOfSemesters; i++) {
        let option = document.createElement("option"); // Create a new option element in each iteration
        option.text = i;
        option.value = i;
        semesterSelect.appendChild(option);
    }
});
