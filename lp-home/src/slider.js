const TypeSizes = {
  1: {
    ram: "520 MB",
    cpu: "1 GHz",
    ssd: "15 GB",
  },
  2: {
    ram: "1 GB",
    cpu: "2 GHz",
    ssd: "60 GB",
  },
  3: {
    ram: "2 GB",
    cpu: "4 GHz",
    ssd: "80 GB",
  },
  4: {
    ram: "4 GB",
    cpu: "6 GHz",
    ssd: "120 GB",
  },
  5: {
    ram: "8 GB",
    cpu: "8 GHz",
    ssd: "160 GB",
  },
  6: {
    ram: "16 GB",
    cpu: "12 GHz",
    ssd: "320 GB",
  },
  7: {
    ram: "24 GB",
    cpu: "16 Ghz",
    ssd: "640 GB",
  },
  8: {
    ram: "32 GB",
    cpu: "20 GHz",
    ssd: "1024 GB",
  },
};
const ValuesPlan = {
  1: {
    internacional: [8.9, 44.15],
    nacional: [13.9, 60.9],
  },
  2: {
    internacional: [17.9, 88.59],
    nacional: [23.9, 104.4],
  },
  3: {
    internacional: [31.9, 161.82],
    nacional: [46.9, 208.8],
  },
  4: {
    internacional: [63.9, 323.64],
    nacional: [93.9, 416.4],
  },
  5: {
    internacional: [95.9, 484.46],
    nacional: [140.9, 625.4],
  },
  6: {
    internacional: [191.9, 971.32],
    nacional: [280.9, 1251.6],
  },
  7: {
    internacional: [382.9, 1941.84],
    nacional: [561.6, 2503.6],
  },
  8: {
    internacional: [764.9, 3879.42],
    nacional: [1045.9, 4663.2],
  },
};
const markPosition = [0, 14.285, 28.57, 42.855, 57.14, 71.425, 85.71, 100];

const sliderInput = $("#slider-input");
const sliderBar = $("#silde-bar-position");

const ballSlider = $("#ball-slider");
const sliderPlan = $("#slider-plan");

const btnServices = $("label[data-checked]");

sliderPlan.on("click", (e) => {setPosition((e.offsetX * 100) / e.target.clientWidth); console.log(e.offsetX, e.target.clientWidth)});
btnServices.on("click", () => {
  const service = $('input[name="services"]:checked').val();

  const size = ballSlider.attr("data-active");
  ChangePlanType(service, size);

  $("label[data-checked='check']")?.attr("data-checked", "hidden");
  $(`label[for="${service}"]`).attr("data-checked", "check");
});

$(function() {
  ballSlider.draggable({
    start: function(event) {
      event.target.classList.remove("transition-all")
      event.target.classList.remove("duration-500")
      $("#silde-bar-position").removeClass("transition-all duration-500")
    },
    stop: function( event, ui ) {
      event.target.classList.add("transition-all")
      event.target.classList.add("duration-500")
      $("#silde-bar-position").addClass("transition-all duration-500")

      const w =  Math.round($("#slider-plan").width())
      const x = (event.target.offsetLeft * 100 / w)
      setPosition(x)
    },
    drag: function( event, ui ) {
      const w =  Math.round($("#slider-plan").width())
      const x = (event.target.offsetLeft * 100 / w)

      console.log(event)
      const index =  markPosition.findIndex((e) => e == getNearestNumber(x))
      ChangePlanType($('input[name="services"]:checked').val(), index + 1);
 
      sliderBar.css("width",`${x}%`);
      if(ui.position.left < -12 ) {
        ui.position.left = 0
      } else {
        ui.position.left = Math.min(w, ui.position.left + 12)
      }
      ui.position.top = 8;
    }
  });
});

const getNearestNumber = (x) => {
  let menorDiferenca = Infinity;
  let numeroMaisProximo = null;
  markPosition.forEach((numero) => {
    const diferenca = Math.abs(numero - x);

    if (diferenca < menorDiferenca) {
      menorDiferenca = diferenca;
      numeroMaisProximo = numero;
    }
  });
  return numeroMaisProximo
}

const setPosition = (x) => {
  const numeroMaisProximo = getNearestNumber(x)
  const index = markPosition.findIndex((e) => e == numeroMaisProximo);

  ballSlider.attr("data-active", index + 1);
  ChangePlanType($('input[name="services"]:checked').val(), index + 1);

  ballSlider.css("left", `${numeroMaisProximo}%`);
  sliderBar.css("width",`${numeroMaisProximo}%`);
};

const ChangePlanType = (location, size) => {
  const ram = $("#ram-value");
  const ssd = $("#ssd-value");
  const cpu = $("#cpu-value");

  const porcen = $("#percentage");
  const originalVal = $("#original-val");
  const value = $("#plan-val");

  const typesValue = TypeSizes[size];
  const planValue = ValuesPlan[size][location];

  ram.text(typesValue.ram)
  ssd.text(typesValue.ssd)
  cpu.text(typesValue.cpu)

  const percentageValue = (planValue[0] * 100) / planValue[1];

  porcen.text(Math.round(percentageValue))
  originalVal.text(planValue[1].toFixed(2).replace(".", ","))
  value.text(planValue[0].toFixed(2).replace(".", ","))
};


ChangePlanType($('input[name="services"]:checked').val(), 1);




