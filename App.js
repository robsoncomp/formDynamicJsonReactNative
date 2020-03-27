import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';
import Form from 'react-native-jsonschema-form';
import jsonSchema from './jsonSchema';

const workSchema = jsonSchema;

const schema1 = {
  type: 'object',
  title: 'Formulário Cartão de Crédito',
  properties: {
    name: {title: 'Nome', type: 'string'},
    credit_card: {title: 'Número do Cartão de Crédito', type: 'number'},
  },

  required: ['name'],

  dependencies: {
    credit_card: {
      properties: {
        billing_address: {title: 'Endereço de cobrança', type: 'string'},
      },
      required: ['billing_address'],
    },
  },
};

const schemaFormulario = {
  type: 'object',
  // required: ['name', 'region'],
  title: 'Identificação Pessoal',
  properties: {
    questao1: {
      title: 'Nome',
      type: 'string',
      OpcoesLista: null,
      ListaValor: null,
      ListaTexto: null,
      TamanhoLimite: 50,
      TamanhoDecimal: null,
      Obrigatorio: true,
      CampoPaiID: null,
    },
    questao2: {
      title: 'Idade',
      type: 'integer',
    },
    questao3: {
      title: 'Sexo',
      type: 'integer',
      enum: [1, 2],
      enumNames: ['MASCULINO', 'FEMININO'],
      default: 'SELECIONE',
    },

    municipio: {
      title: 'Selecione a cidade',
      type: 'number',
      anyOf: [
        {enum: [5000203], title: 'ÁGUA CLARA', type: 'number'},
        {enum: [5000252], title: 'ALCINÓPOLIS', type: 'number'},
        {enum: [5000609], title: 'AMAMBAI', type: 'number'},
        {enum: [5000708], title: 'ANASTÁCIO', type: 'number'},
        {enum: [5000807], title: 'ANAURILÂNDIA', type: 'number'},
        {enum: [5000856], title: 'ANGÉLICA', type: 'number'},
        {enum: [5000906], title: 'ANTÔNIO JOÃO', type: 'number'},
        {enum: [5001003], title: 'APARECIDA DO TABOADO', type: 'number'},
        {enum: [5001102], title: 'AQUIDAUANA', type: 'number'},
        {enum: [5001243], title: 'ARAL MOREIRA', type: 'number'},
        {enum: [5001508], title: 'BANDEIRANTES', type: 'number'},
        {enum: [5001904], title: 'BATAGUASSU', type: 'number'},
        {enum: [5002001], title: 'BATAYPORÃ', type: 'number'},
        {enum: [5002100], title: 'BELA VISTA', type: 'number'},
        {enum: [5002159], title: 'BODOQUENA', type: 'number'},
        {enum: [5002209], title: 'BONITO', type: 'number'},
        {enum: [5002308], title: 'BRASILÂNDIA', type: 'number'},
        {enum: [5002407], title: 'CAARAPÓ', type: 'number'},
        {enum: [5002605], title: 'CAMAPUÃ', type: 'number'},
        {enum: [5002704], title: 'CAMPO GRANDE', type: 'number'},
        {enum: [5002803], title: 'CARACOL', type: 'number'},
        {enum: [5002902], title: 'CASSILÂNDIA', type: 'number'},
        {enum: [5002951], title: 'CHAPADÃO DO SUL', type: 'number'},
        {enum: [5003108], title: 'CORGUINHO', type: 'number'},
        {enum: [5003157], title: 'CORONEL SAPUCAIA', type: 'number'},
        {enum: [5003207], title: 'CORUMBÁ', type: 'number'},
        {enum: [5003256], title: 'COSTA RICA', type: 'number'},
        {enum: [5003306], title: 'COXIM', type: 'number'},
        {enum: [5003454], title: 'DEODÁPOLIS', type: 'number'},
        {enum: [5003488], title: 'DOIS IRMÃOS DO BURITI', type: 'number'},
        {enum: [5003504], title: 'DOURADINA', type: 'number'},
        {enum: [5003702], title: 'DOURADOS', type: 'number'},
        {enum: [5003751], title: 'ELDORADO', type: 'number'},
        {enum: [5003801], title: 'FÁTIMA DO SUL', type: 'number'},
        {enum: [5003900], title: 'FIGUEIRÃO', type: 'number'},
        {enum: [5004007], title: 'GLÓRIA DE DOURADOS', type: 'number'},
        {enum: [5004106], title: 'GUIA LOPES DA LAGUNA', type: 'number'},
        {enum: [5004304], title: 'IGUATEMI', type: 'number'},
        {enum: [5004403], title: 'INOCÊNCIA', type: 'number'},
        {enum: [5004502], title: 'ITAPORÃ', type: 'number'},
        {enum: [5004601], title: 'ITAQUIRAÍ', type: 'number'},
        {enum: [5004700], title: 'IVINHEMA', type: 'number'},
        {enum: [5004809], title: 'JAPORÃ', type: 'number'},
        {enum: [5004908], title: 'JARAGUARI', type: 'number'},
        {enum: [5005004], title: 'JARDIM', type: 'number'},
        {enum: [5005103], title: 'JATEÍ', type: 'number'},
        {enum: [5005152], title: 'JUTI', type: 'number'},
        {enum: [5005202], title: 'LADÁRIO', type: 'number'},
        {enum: [5005251], title: 'LAGUNA CARAPÃ', type: 'number'},
        {enum: [5005400], title: 'MARACAJU', type: 'number'},
        {enum: [5005608], title: 'MIRANDA', type: 'number'},
        {enum: [5005681], title: 'MUNDO NOVO', type: 'number'},
        {enum: [5005707], title: 'NAVIRAÍ', type: 'number'},
        {enum: [5005806], title: 'NIOAQUE', type: 'number'},
        {enum: [5006002], title: 'NOVA ALVORADA DO SUL', type: 'number'},
        {enum: [5006200], title: 'NOVA ANDRADINA', type: 'number'},
        {enum: [5006259], title: 'NOVO HORIZONTE DO SUL', type: 'number'},
        {enum: [5006275], title: 'PARAÍSO DAS ÁGUAS', type: 'number'},
        {enum: [5006309], title: 'PARANAÍBA', type: 'number'},
        {enum: [5006358], title: 'PARANHOS', type: 'number'},
        {enum: [5006408], title: 'PEDRO GOMES', type: 'number'},
        {enum: [5006606], title: 'PONTA PORÃ', type: 'number'},
        {enum: [5006903], title: 'PORTO MURTINHO', type: 'number'},
        {enum: [5007109], title: 'RIBAS DO RIO PARDO', type: 'number'},
        {enum: [5007208], title: 'RIO BRILHANTE', type: 'number'},
        {enum: [5007307], title: 'RIO NEGRO', type: 'number'},
        {enum: [5007406], title: 'RIO VERDE DE MATO GROSSO', type: 'number'},
        {enum: [5007505], title: 'ROCHEDO', type: 'number'},
        {enum: [5007554], title: 'SANTA RITA DO PARDO', type: 'number'},
        {enum: [5007695], title: 'SÃO GABRIEL DO OESTE', type: 'number'},
        {enum: [5007802], title: 'SELVÍRIA', type: 'number'},
        {enum: [5007703], title: 'SETE QUEDAS', type: 'number'},
        {enum: [5007901], title: 'SIDROLÂNDIA', type: 'number'},
        {enum: [5007935], title: 'SONORA', type: 'number'},
        {enum: [5007950], title: 'TACURU', type: 'number'},
        {enum: [5007976], title: 'TAQUARUSSU', type: 'number'},
        {enum: [5008008], title: 'TERENOS', type: 'number'},
        {enum: [5008305], title: 'TRÊS LAGOAS', type: 'number'},
        {enum: [5008404], title: 'VICENTINA', type: 'number'},
      ],
    },
    questaoEsporte: {
      title: 'Esporte(s) Favorito(s)?',
      type: 'string',
      enum: [
        'SELECIONE',
        'Futebol',
        'Basquete',
        'Volei',
        'Natação',
        'Corrida',
        'Outro',
      ],
      default: 'SELECIONE',
    },
    questao12: {
      title: 'Pratica algum destes regularmente?',
      type: 'boolean',
    },
  },
  dependencies: {
    questaoEsporte: {
      oneOf: [
        {
          properties: {
            questaoEsporte: {
              enum: ['Outro'],
            },
            'Informe o esporte?': {
              type: 'string',
            },
          },
          // required: ['qual o outro esporte?'],
        },
      ],
    },
  },

  isObject: true,
};

const form = {
  type: 'object',
  title: 'Sign In',
  required: ['userIdEmail', 'password'],
  properties: {
    userIdEmail: {
      title: 'UserId or Email',
      type: 'string',
    },
    password: {
      title: 'Password',
      type: 'string',
    },
    rememberMe: {
      title: 'Remember me',
      type: 'boolean',
      default: false,
    },
  },
};
function transformErrors(errors) {
  let reterrors = _.filter(errors, error => {
    console.log('eror', error.property);
    // return true
    return error.message == 'is a required property';

    // return  (!(error && error.property === ".properties['viniButton'].type") )
  });
  return reterrors;
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.notch} />
        <Form
          //schema={form}
          //schema={schema1}
           schema={schemaFormulario}
          // schema={jsonSchema}
          // transformErrors={transformErrors}
          onSubmit={submited => {
            Alert.alert('valor selecionado', JSON.stringify(submited.formData));
          }}
          uiSchema={{...workSchema.uiSchema}}
          submitTitle={'Salvar'}
          noValidate={false}
          liveValidate={true}
          showErrorList={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66ff99',
    padding: 20,
  },
  notch: {
    width: '100%',
    height: 20,
  },
});
