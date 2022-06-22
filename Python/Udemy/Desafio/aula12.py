
try:
    num = input('Digite um número: ')
    num = int(num)
    div = (num % 2)
    if int(div) >= 1:
        print('Este número é ímpar.')
    else:
        print('Este número é par.')
except ValueError:
    print('Não foi possível analisar o número digitado.')

# COMO FOI FEITO NA AULA:
#
# numero_inteiro = input('digite um número)
#
# if numero_inteiro.isdigit():
#   numero_inteiro = int(numero_inteiro)
#
#   if numero_inteiro % 2 == 0:
#       print(f"{numero_inteiro} é par")
#   else:
#       print(f"{numero_inteiro} é impar")
#
# else:
#    print("isso nao é um número inteiro")
#
# if not numero_inteiro.isdigit():
#   print('isso nao é um numero inteiro')
# else:
#   numero_inteiro = int(numero_inteiro)
#
#   if not numero_inteiro % 2 == 0: -------------- nao sei se dava pra ter feito sem not, mas imagino que sim
#       print(f"{numero_inteiro} é impar")
#   else:
#       print(f"{numero_inteiro} é par")

