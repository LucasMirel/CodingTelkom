const $ = (id) => {
    const el = document.getElementById(id);
    if (!el)
        throw new Error(`Missing element #${id}`);
    return el;
};
const fields = [
    { input: $("fullName"), error: $("errorFullName"), label: "Full Name" },
    { input: $("currentSchool"), error: $("errorCurrentSchool"), label: "Current School" },
    { input: $("fullAddress"), error: $("errorFullAddress"), label: "Full Address" },
    { input: $("parentName"), error: $("errorParentName"), label: "Parent Name" },
    { input: $("phoneNumber"), error: $("errorPhoneNumber"), label: "Phone Number" },
    { input: $("schedule"), error: $("errorSchedule"), label: "Schedule" },
];
const result = $("result");
const submit = $("submit");
const cancel = $("cancel");
submit.addEventListener("click", (event) => {
    event.preventDefault();
    const lines = [];
    let valid = true;
    for (const { input, error, label } of fields) {
        const value = input.value.trim();
        if (value === "") {
            error.textContent = `${label} is required.`;
            error.style.color = "red";
            valid = false;
        }
        else {
            error.textContent = "";
            lines.push(`${label}: ${value}`);
        }
    }
    result.textContent = valid ? lines.join("\n") : "Please fill out the form.";
});
cancel.addEventListener("click", () => {
    fields.forEach(({ input, error }) => {
        input.value = "";
        error.textContent = "";
    });
    result.textContent = "";
});
export {};
