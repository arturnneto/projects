function novaAtividade(event){
    event.preventDefault()

    const projetoContent = document.querySelector('#atividade')
    projetoContent.innerHTML +=  ` <br/> <div class="form-group">
            <label class="control-label col-sm-2" for="email">Atividade:</label>
                <div class="col-sm-3">
                    <input type="text" class="form-control" id="txtNomeAtividade" placeholder="Insira uma breve descrição da atividade">
                </div>
            </div>
            <div class="form-group" style="margin-top: 10px">
            <label class="control-label col-sm-2" for="email">Descrição Detalhada:</label>
            <div class="col-sm-5">
                        <input type="text" class="form-control" id="txtDescricaoAtividade" placeholder="Insira uma descrição detalhada da atividade">
            </div>
            </div>
            <div class="form-group" style="margin-top:10px">
                <label class="control-label col-sm-2" for="pwd">Data de Início:</label>
                <div class="col-sm-1">
                    <input type="date" class="form-control" id="dataAtividadeI" style="text-align: center; text-transform:uppercase">
                </div>
            </div>
            <div class="form-group" style="margin-top:10px; margin-bottom: 20px">
                <label class="control-label col-sm-2" for="pwd">Data de Entrega:</label>
                    <div class="col-sm-1">
                        <input type="date" class="form-control" id="dataAtividadeE" style="text-align: center; text-transform:uppercase">
                    </div>
            </div>

            <div class="form-group" style="margin-top: 10px">
                <a style="font-size: 16px">Pessoas Envolvidas:</a>
                <br>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa1" value="option1">
                    <label class="form-check-label" for="inlineCheckbox1">Fulano de Tal</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa2" value="option2">
                    <label class="form-check-label" for="inlineCheckbox2">Fulano de Tal</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa3" value="option3">
                    <label class="form-check-label" for="inlineCheckbox2">Fulano de Tal</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa4" value="option4">
                    <label class="form-check-label" for="inlineCheckbox2">Fulano de Tal</label>
                </div>
                <br>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa5" value="option5">
                    <label class="form-check-label" for="inlineCheckbox2">Fulano de Tal</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa6" value="option6">
                    <label class="form-check-label" for="inlineCheckbox2">Fulano de Tal</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa7" value="option7">
                    <label class="form-check-label" for="inlineCheckbox2">Fulano de Tal</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa8" value="option8">
                    <label class="form-check-label" for="inlineCheckbox1">Fulano de Tal</label>
                </div>
                <br>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa9" value="option9">
                    <label class="form-check-label" for="inlineCheckbox2">Fulano de Tal</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa10" value="option10">
                    <label class="form-check-label" for="inlineCheckbox2">Fulano de Tal</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa11" value="option11">
                    <label class="form-check-label" for="inlineCheckbox2">Fulano de Tal</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa12" value="option12">
                    <label class="form-check-label" for="inlineCheckbox2">Fulano de Tal</label>
                </div>
                <br>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa13" value="option13">
                    <label class="form-check-label" for="inlineCheckbox2">Fulano de Tal</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa14" value="option14">
                    <label class="form-check-label" for="inlineCheckbox2">Fulano de Tal</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa15" value="option13">
                    <label class="form-check-label" for="inlineCheckbox2">Fulano de Tal</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="pessoa16" value="option13">
                    <label class="form-check-label" for="inlineCheckbox2">Fulano de Tal</label>
                </div>
            </div>
            `
}

