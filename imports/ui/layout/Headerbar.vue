<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon>
        
      <v-btn
        class="mx-2"
        fab
        dark
        medium
        color="green"
      >
        <v-icon dark>
          mdi-home
        </v-icon>
      </v-btn>
    
   
   </v-app-bar-nav-icon>
      

      <v-toolbar-title> Bienvenue sur BookYou'Room </v-toolbar-title>

      <v-spacer> </v-spacer>

      <div class="text-center d-flex align-center justify-space-around">
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on"
            @click="showDialogConnectezVous()"
            class="headline">Se connecter
            
              
            </v-btn>
          </template>
          <span>Connectez-vous</span>
        </v-tooltip>
      </div>

      <div class="text-center d-flex align-center justify-space-around">
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              @click="showDialogCompte()"
              class="headline"> Créer son compte
            </v-btn>
          </template>
          <span>Pas encore de compte ?</span>
        </v-tooltip>
      </div>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>


<!-- Formulaire CONNEXION -->

    <v-dialog
      v-model="dialogConnexion"
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          Connexion à mon espace
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="cacheDialogConnectezVous()"
          >
            Suivant
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            to="/monEspace.vue"
            >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



<!-- Formulaire CREER SON COMPTE -->

    <v-dialog
      v-model="dialogCompte"
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          Créer mon espace
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="cacheDialogCompte()"
          >
            Suivant
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            to="/monEspace.vue"
            >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialogConnexion: false,
        dialogCompte: false
      }
    },

    methods:{
      showDialogConnectezVous(){
        this.dialogConnexion = true
      },
      showDialogCompte(){
        this.dialogCompte = true
      },
      cacheDialogConnectezVous(){
        this.dialogConnexion = false
        
      },
      cacheDialogCompte(){
        this.dialogCompte = false
      }
    }
  }
</script>


