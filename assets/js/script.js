const result = document.getElementById("result");

const buttons = document.getElementsByTagName("button");
Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.currentTarget.textContent === ",") {
      if (result.textContent.includes(",") === false) {
        result.textContent += ",";
      }
    } else if (result.textContent === "0") {
      result.textContent = event.currentTarget.textContent;
    } else {
      result.textContent += event.currentTarget.textContent;
    }
    if (event.currentTarget.textContent === "=") {
      if (result.textContent.includes("+")) {
        const raw = result.textContent.slice(0, -1).split("+");
        const nums = raw.map((num) => parseInt(num));
        let calc = 0;
        nums.forEach((item) => {
          calc += item;
        });
        result.textContent = calc;
      }

      if (result.textContent.includes("-")) {
        const raw = result.textContent.slice(0, -1).split("-");
        // console.log(raw);
        const nums = raw.map((num) => parseInt(num));
        // console.log(nums);
        // result.textContent = calc;
        function minus(total, num) {
          return total - num;
        }
        const hasil = nums.reduce(minus);
        // console.log(hasil);
        result.textContent = hasil;
      }

      if (result.textContent.includes("÷")) {
        const raw = result.textContent.slice(0, -1).split("÷");
        const nums = raw.map((num) => parseInt(num));
        function division(total, num) {
          return total / num;
        }
        const hasilDivision = nums.reduce(division);
        // console.log(hasilDivision);
        result.textContent = hasilDivision;
      }

      if (result.textContent.includes("x")) {
        const raw = result.textContent.slice(0, -1).split("x");
        const nums = raw.map((num) => parseInt(num));
        function multiply(total, num) {
          return total * num;
        }
        const hasilMultiply = nums.reduce(multiply);
        // console.log(hasilDivision);
        result.textContent = hasilMultiply;
      }

      if (result.textContent.includes("%")) {
        const raw = result.textContent.slice(0, -1).split("%");
        const nums = raw.map((num) => parseInt(num));
        function percent(total, num) {
          return total / 100;
        }
        const hasilPercent = nums.reduce(percent);
        // console.log(hasilDivision);
        result.textContent = hasilPercent;
      }

      if (result.textContent.includes("+/-")) {
        const raw = result.textContent;
        let konvert = 0;
        if (result.textContent.includes("-")) {
        }
      }
    }
    if (event.currentTarget.textContent == "AC") {
      result.textContent = "0";
    }
  });
});
