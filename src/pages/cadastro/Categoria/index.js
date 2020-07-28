import React from 'react';
import { Link } from 'react-router-dom';
import TemplateBase from '../../../components/TemplateBase';

export default function CadastroCategoria() {
  return (
    <TemplateBase>
      <h1>Cadastro de Vídeo</h1> 

      <Link to="/">
        Ir para home
      </Link>
    </TemplateBase>
  )
}