/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitulos = categorias.map(({ titulo }) => titulo);

  const { handleChange, valores } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasDoServer) => {
        setCategorias(categoriasDoServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Cadastro feito com Sucesso!!!!');
        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === valores.categoria);

        videosRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
            alert('Cadastro feito com Sucesso!!!!');
          });
      }}
      >

        <FormField
          label="Titulo do Vídeo:"
          value={valores.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          label="Url:"
          value={valores.url}
          name="url"
          onChange={handleChange}
        />

        <FormField
          label="Categoria:"
          value={valores.categoria}
          name="categoria"
          onChange={handleChange}
          suggestions={categoryTitulos}
        />

        <Button type="submit">
          Cadastrar
          {' '}
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}
export default CadastroVideo;
