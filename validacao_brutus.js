// Valida dados da venda do cão Brutus
pm.test('Checa status da venda = delivered', function(){
var id_venda_brutus = pm.variables.get('id_venda_brutus');
var id_venda_brutus_delivered = pm.variables.get('id_venda_brutus_delivered');
var status_venda_brutus_delivered = pm.variables.get('status_venda_brutus_delivered');

    if((pm.expect(id_venda_brutus).to.eql(id_venda_brutus_delivered))&&(pm.expect(status_venda_brutus_delivered).to.eql('delivered'))){
        console.log('Status da venda trocado com sucesso');
    }
}
