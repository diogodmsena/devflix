import React from 'react';
import { Link } from 'react-router-dom';
import TemplateBase from '../../../components/TemplateBase';

export default function CadastroVideo() {
  return (
    <TemplateBase>
      <h1>Cadastro de Vídeo</h1> 

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </TemplateBase>
  )
}