import React, { Component } from 'react'

import './Contact.scss'

class Contact extends Component {

    handleSubmit(event) {
        alert('A name was submitted: ');
        event.preventDefault();
    }

    render() {
        return (
            <section className="contact content">
                <h1 className="title_main">Fale Conosco</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="col">
                        <div className="field">
                            <label>None</label>
                            <input
                                type="text"
                                name="name"
                                onChange={ this.handleChange }
                                onBlur={ this.handleBlur }
                            />
                        </div>

                        <div className="field">
                            <label>E-mail</label>
                            <input
                                type="email"
                                name="email"
                                onChange={ this.handleChange }
                                onBlur={ this.handleBlur }
                            />
                        </div>

                        <ul className="field field__radio">
                            <label>Sexo</label>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="sexo"
                                        value="fem"
                                        onChange={this.handleChange}
                                    />
                                    Feminino
                                    <span></span>
                                </label>                            
                            </li>                        
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="sexo"
                                        value="masc"
                                        onChange={this.handleChange}
                                    />
                                    Maculino
                                    <span></span>
                                </label>                            
                            </li>
                        </ul>
                        
                        <div className="field">
                            <div className="field__city">
                                <label>Cidade</label>
                                <input
                                    type="text"
                                    name="cidade"
                                    onChange={ this.handleChange }
                                    onBlur={ this.handleBlur }
                                />
                            </div>
                            <div className="field__state">
                                <select name="state">
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                </select> 
                            </div>
                        </div>

                        <div className="field fone">
                            <div className="fone__ddd">
                                <label>DDD</label>
                                <input
                                    type="number"
                                    name="fone__ddd"
                                    onChange={ this.handleChange }
                                    onBlur={ this.handleBlur }
                                />
                            </div>
                            <div className="fone__number">
                                <label>Telefone</label>
                                <input
                                    type="number"
                                    name="fone__number"
                                    onChange={ this.handleChange }
                                    onBlur={ this.handleBlur }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="field">
                            <label>Título da Mensagem</label>
                            <input
                                type="text"
                                name="title_mensagen"
                                onChange={ this.handleChange }
                                onBlur={ this.handleBlur }
                            />
                        </div>
                        <div className="field">
                            <label>Mensagem</label>
                            <textarea
                                name="mensagen"
                                cols={40}
                                rows={10}
                            />
                        </div>

                        <div className="btn">
                            <button className="btn__clear">Limpar</button>
                            <button className="btn__send">Enviar</button>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default Contact