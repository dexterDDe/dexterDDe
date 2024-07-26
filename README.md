Avancé un poco con la solución al incidente de versiones y al compilar.

Faltaría agregar un chat grupal aunque sea con las nuevas APIs que el profe proveyó

GETs

Lista de grupos mensaje por usuario
https://www.hostcatedral.com/api/app-chat/public/group-members-by-user/{user_id}

Lista de usuarios registrados
https://www.hostcatedral.com/api/app-chat/public/users

Mensaje privado
https://www.hostcatedral.com/api/app-chat/public/private-messages-by-user/{sender_id}/{receiver_id}

Listar mensaje grupal
https://www.hostcatedral.com/api/app-chat/public/group-messages-by-group/{group_id}


POST

Insertar mensaje grupal
https://www.hostcatedral.com/api/app-chat/public/group-messages

Ejemplo de JSON:
{
    "sender_id": 1,
    "group_id": 1,
    "content": "Hello, Group 1! This is a new message."
}


Enviar un mensaje privado a destinatario
https://www.hostcatedral.com/api/app-chat/public/private-messages

Ejemplo de JSON:
{
    "sender_id": 1,
    "receiver_id": 2,
    "content": "Hello, hugo! This is a private message from user1."
}

