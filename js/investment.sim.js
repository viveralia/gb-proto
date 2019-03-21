function computeLoan(){

  // Cambiar variables
  var tasa = 16;
  var vigencia_mensual = 6;

  var vigencia_anual = 12 / vigencia_mensual;
  var interes = (tasa / vigencia_anual) * 0.01;
	var monto = document.getElementById('monto').value;
	var ganancia_gb = (monto * interes);
  var ganancia_banco = 0.025 * monto;
	var pago = ((monto / 1) + ganancia_gb);
  var ganancia = ganancia_gb - ganancia_banco;
  var ganancia_lg = ganancia;
  var pago_banco = ((monto / 1) + ganancia_banco);
	pago = pago.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('pago').innerHTML = "$"+pago+ " MXN";
  ganancia_gb = ganancia_gb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('ganancia_gb').innerHTML = "$"+ganancia_gb+ " MXN";
  monto = monto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('monto_print').innerHTML = "$"+monto+" MXN";

  pago_banco = pago_banco.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('pago_banco').innerHTML = "$"+pago_banco+" MXN";

  ganancia = ganancia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('ganancia').innerHTML = "$"+ganancia+ " MXN";
  ganancia_lg = ganancia_lg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('ganancia_lg').innerHTML = "$"+ganancia_lg+ " MXN";
}
