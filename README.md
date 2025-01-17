Koufkouf Sanae 
sanae.koufkouf@student.vinci.be
https://github.com/sanae-koufkouf-vinci/IPL-social
Mon paragraphe:
Voici une description des principales fonctions testées :

isValidPasswordLength : Cette fonction vérifie si la longueur du mot de passe est d'au moins 8 caractères. Elle retourne true pour un mot de passe valide (8 caractères ou plus) et false pour un mot de passe trop court.

containsSpecialCaracter : Cette fonction vérifie si le mot de passe contient un caractère spécial. Elle retourne true si le mot de passe ne contient pas de caractère spécial, et false s'il en contient un.

containsNumbers : Cette fonction vérifie si le mot de passe contient des chiffres. Elle retourne true si des chiffres sont présents et false s'il n'y en a pas.

doesNotContainIPL : Cette fonction s'assure que le mot de passe ne contient pas la chaîne de caractères "IPL". Elle retourne true si "IPL" n'est pas présent dans le mot de passe et false si "IPL" y figure, indépendamment de la casse.

isValidPassword : Enfin, cette fonction valide un mot de passe en vérifiant qu'il satisfait à toutes les conditions précédentes. Elle retourne true si toutes les conditions sont respectées, et false dans le cas contraire.

Les tests sont organisés pour vérifier différents scénarios de mots de passe, permettant ainsi de valider l'exactitude de chaque fonction. Par exemple, des mots de passe valides comme "ABCDEFGH!" ou "ValidPass1!" sont utilisés pour s'assurer que chaque critère de validation est correctement appliqué. À l'inverse, des mots de passe invalides, comme "ABC" (trop court) ou "ABCIPL123!" (contenant "IPL"), sont également testés pour vérifier que les fonctions retournent la bonne valeur.



commande pour executer mes test : npm run test
