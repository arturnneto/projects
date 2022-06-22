
nome = input('Digite seu primeiro nome: ')
qtd = len(nome)

if int(qtd) < 5:
    print('Seu nome é curto.')
elif 4 < int(qtd) < 7:
    print('Seu nome é normal.')
elif int(qtd) > 7:
    print('Seu nome é grande.')
else:
    print('Não foi possível analisar seu nome.')

# COMO FOI FEITO NA AULA

# nome = input('digite seu nome: ')
# tamanho = len(nome)
#
# if tamanho <=4:
#     print('seu nome é curto')
# elif tamanho <=6:
#     print('seu nome é normal')
# else:
#     print('seu nome é grande')
#
# uma coisa: ele termina no else, tas sempre fazendo com else sendo uma exceçao geral, da pra parar com isso, mas com
# cuidado
