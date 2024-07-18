const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", () => {
    const input = document.getElementById("text-input").value;
    const result = document.getElementById("result");

    if (input === ""){
        result.textContent = "Please input a value";
        result.style.color="rgba(124, 124, 124, 0.7)";
        checkBtn.style.background="#83c7ff";
        document.getElementById("text-input").style.border="2px solid #83c7ff"
        //alert("Please input a value");
        return;
    }

    const regex = /\s|[\u0300-\u036f]|[_+-.,!@#$%^&*();/|<>"'?:]/gi;

    if (input.toLowerCase().normalize('NFD').replaceAll(regex, "") === input.toLowerCase().normalize('NFD').replaceAll(regex, "").split("").reverse().join("")) {
        result.textContent = `${input} is a palindrome`;
        checkBtn.style.background="#8ae09f";
        result.style.color="#619e70";
        document.getElementById("text-input").style.border="2px solid #8ae09f"
    } else {
        result.textContent = `${input} is not a palindrome`;
        checkBtn.style.background="#e68181";
        result.style.color="#e68181";
        document.getElementById("text-input").style.border="2px solid #e68181"
    }
})