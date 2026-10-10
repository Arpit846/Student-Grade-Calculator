const form = document.getElementById("marksForm");
const result = document.getElementById("result");

const subjects = [
    "maths",
    "physics",
    "chemistry",
    "english",
    "computer"
];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let total = 0;
    let failed = false;

    for (let subject of subjects) {
        const input = document.getElementById(subject);
        const marks = Number(input.value);

        if (
            input.value.trim() === "" ||
            !Number.isFinite(marks) ||
            marks < 0 ||
            marks > 100
        ) {
            alert("Please enter valid marks between 0 and 100.");
            input.focus();
            return;
        }

        total += marks;

        if (marks < 33) {
            failed = true;
        }
    }

    const percentage = total / 5;

    let grade;

    if (failed) {
        grade = "F";
    } else if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    const passed = !failed;

    document.getElementById("total").textContent =
        `${total} / 500`;

    document.getElementById("percentage").textContent =
        `${percentage.toFixed(2)}%`;

    document.getElementById("grade").textContent = grade;

    const status = document.getElementById("status");

    status.textContent = passed
        ? "✓ PASS"
        : "✗ FAIL";

    status.classList.toggle("fail", !passed);

    document.getElementById("message").textContent = passed
        ? "Congratulations! Keep up the good work 🎉"
        : "You need at least 33 marks in every subject.";

    result.hidden = false;

    result.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});

form.addEventListener("reset", function () {
    result.hidden = true;
});