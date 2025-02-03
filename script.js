// Click Event
document.getElementById("clickBtn").addEventListener("click", function() {
    document.getElementById("image").src = "new-image.jpg"; // Change this to an actual image path
    customFunction();
});

// Mouseover Event
document.getElementById("mouseoverImage").addEventListener("mouseover", function() {
    alert(document.getElementById("image").title);
});

// Custom Function
function customFunction() {
    console.log("Changed the picture");
}
