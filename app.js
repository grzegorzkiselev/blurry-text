var colors = ["#EE7D38", "#EA507C", "#B244CA", "#5B61FF", "#21BEE7"];
var color = colors[Math.round(Math.random(0, colors.length))];

var text = new Blotter.Text("Яндекс Плюс", {
    family : "'YS Text', serif",
    size: 140,
    weight: 800,
    style: 'italic',
    fill: color,
    paddingLeft: 100,
    paddingTop: 100,
    paddingRight: 100,
    paddingBottom: 100,
});

// var material = new Blotter.LiquidDistortMaterial();
var material = new Blotter.FliesMaterial();

// material.uniforms.uSpeed.value = 0.1;
material.uniforms.uPointCellWidth.value = 0.025;
material.uniforms.uPointCellWidth.value = 0.03;

var blotter = new Blotter(material, {
  texts : text
});

var elem = document.getElementById("app");
var scope = blotter.forText(text);

scope.appendTo(elem);

document.addEventListener("mousemove", (e) => material.uniforms.uSpeed.value = e.clientX * 0.01)