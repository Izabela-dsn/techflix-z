/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        {' '}
        Cadastro de Categoria:
        {' '}
      </h1>

      <form onSubmit={
            function handleSubmit(e) {
              e.preventDefault();
              setCategorias([
                ...categorias,
                valores,
              ]);

              setValores(valoresIniciais);
            }
        }
      >

        <FormField
          label="Nome da Categoria:"
          value={valores.titulo}
          type="text"
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          label="Descrição da Categoria:"
          value={valores.descricao}
          type="textarea"
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          value={valores.cor}
          type="color"
          name="cor"
          onChange={handleChange}
        />

        {
            /*
                    <div>
                        <label>
                            Nome da Categoria:
                            <input type="text" name="titulo" value={valores.titulo} onChange={handleChange}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            Descrição da Categoria:
                            <textarea type="text" name="descricao" value={valores.descricao} onChange={handleChange}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            Cor da Categoria:
                            <input type="color" name="cor" value={valores.cor} onChange={handleChange}/>
                        </label>
                    </div>

                 */
        }

        <Button>
          Cadastrar
          {' '}
        </Button>

      </form>

      {
            categorias.length === 0 && (
            <div>
              Carregando...
              {' '}
            </div>
            )
        }

      <ul>
        {' '}
        {
            categorias.map((categoria) => (
              <li key={`${categoria.titulo}`}>
                {' '}
                { categoria.titulo }
                {' '}

              </li>
            ))
        }
        {' '}

      </ul>

      <Link to="/">
        Voltar para Home
        {' '}
      </Link>
    </PageDefault>
  );
}
export default CadastroCategoria;
