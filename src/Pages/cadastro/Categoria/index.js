/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, valores, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://techflix-z.herokuapp.com/categorias';
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

              clearForm();
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
              <li key={`${categoria.id}`}>
                {' '}
                { categoria.titulo }
                { categoria.cor }
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
