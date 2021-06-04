import random
player1_position = 1
player2_position = 1

print("start")

def after_move1(): 
    global player1_position
    if player1_position > 100:
        player1_position = 100
    print("You rolled a " + str(dValue))
    print("You are at spot " + str(player1_position))

def after_move2():
    global player2_position
    if player2_position > 100:
        player2_position = 100
    print("You rolled a " + str(dValue))
    print("You are at spot " + str(player2_position))

def current_value1():
    global player1_position
    player1_position += dValue
    return player1_position

def current_value2():
    global player2_position
    player2_position += dValue
    return player2_position

def check1():
    global player1_position
    ladders = {4:15, 12:23, 20:22, 28:84, 36:44, 40:42, 51:67, 71:91, 80:100}
    snakes = {98:78, 95: 75, 93:73, 87:24, 64:60, 62:19, 56:54, 59:11, 47: 26, 16: 6}
    if player1_position in snakes:
        player1_position = snakes[player1_position]
    elif player1_position in ladders:
        player1_position = ladders[player1_position]

def check2():
    global player2_position
    ladders = {4:15, 12:23, 20:22, 28:84, 36:44, 40:42, 51:67, 71:91, 80:100} 
    snakes = {98:78, 95: 75, 93:73, 87:24, 64:60, 62:19, 56:54, 59:11, 47: 26, 16: 6}
    if player2_position in snakes:
        player1_position = snakes[player2_position]
    elif player2_position in ladders:
        player1_position = ladders[player2_position]\

while player1_position and player2_position < 100:
    input("Player 1 hit enter to roll")
    dValue = random.randint(1, 6)
    current_value1()
    check1()
    after_move1()
    if player1_position >= 100:
        print("Player 1 wins")
        break
    input("Player 2 hit enter to roll")
    dValue = random.randint(1, 6)
    current_value2()
    check2()
    after_move2()
    if player2_position >= 100:
        print("Player 2 wins")

print("end")
