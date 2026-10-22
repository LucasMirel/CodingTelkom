export {};

const $ = <T extends HTMLElement>(id: string): T => {
    const el = document.getElementById(id);
    if (!el) throw new Error(`Missing element #${id}`);
    return el as T;
};

const fields = [
    { input: $<HTMLInputElement>("fullName"),     error: $("errorFullName"),     label: "Full Name" },
    { input: $<HTMLInputElement>("currentSchool"), error: $("errorCurrentSchool"), label: "Current School" },
    { input: $<HTMLInputElement>("fullAddress"),   error: $("errorFullAddress"),   label: "Full Address" },
    { input: $<HTMLInputElement>("parentName"),    error: $("errorParentName"),    label: "Parent Name" },
    { input: $<HTMLInputElement>("phoneNumber"),   error: $("errorPhoneNumber"),   label: "Phone Number" },
    { input: $<HTMLSelectElement>("schedule"),     error: $("errorSchedule"),      label: "Schedule" },
];

const result = $<HTMLDivElement>("result");
const submit = $<HTMLButtonElement>("submit");
const cancel = $<HTMLButtonElement>("cancel");

submit.addEventListener("click", (event) => {
    event.preventDefault();

    const lines: string[] = [];
    let valid = true;

    for (const { input, error, label } of fields) {
        const value = input.value.trim();
        if (value === "") {
            error.textContent = `${label} is required.`;
            error.style.color = "red";
            valid = false;
        } else {
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