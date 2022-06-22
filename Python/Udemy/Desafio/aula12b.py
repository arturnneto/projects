
hora = input('Digite a hora atual, sem os minutos: ')

try:
    if 6 <= int(hora) <= 11:
        print('Bom dia.')
    elif 12 <= int(hora) <= 18:
        print('Boa tarde.')
    elif 23 >= int(hora) >= 19 or 0 <= int(hora) <= 5:
        print('Boa noite.')
    elif int(hora) >= 24:
        print('Não foi possível analisar o horário.')
    else:
        print('Não foi possível analisar o horário.')
except:
    print('Digite um número válido.')

# COMO FOI FEITO NA AULA:
#
# horario = input('digite um horario (0-23): ')
#
# if horario.isdigit():
#   horario = int(horario)
#
#   if horario < 0 or horario > 23
#       print('horario deve estar entre 0 e 23')
#   else:
#       if horario <= 11:
#           print('bom dia')
#       elif horario <= 17
#           print('boa tarde')
#       else:
#           print('boa noite')
#
