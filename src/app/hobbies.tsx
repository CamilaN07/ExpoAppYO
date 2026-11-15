import React from 'react';
import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import TarjetaHobby from '../components/TarjetaHobby';
import { Ionicons } from '@expo/vector-icons';

export default function Hobbies() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.headerIcon}>
        <Ionicons name="heart" size={60} color="#e11d48" />
        <Text style={estilos.tituloPrincipal}>Pasatiempos e Intereses</Text>
      </View>

      <TarjetaHobby 
        titulo="compras en linea"
        descripcionCorta="ver productos interesante que vendan en app de compras como temu o shein"
        icono={"gamepad-controller-outline" as any}
        onPress={() => Alert.alert("Detalle de Hobby", "Me parece muy interesante la gran variedad de productos tan unico y interesantes que se pueden encontrar")}
      />

      <TarjetaHobby 
        titulo="Personas queridas"
        descripcionCorta="pasar tiempo con mis amigos y familia"
        icono={"fitness-outline" as any}
        onPress={() => Alert.alert("Detalle de Hobby", " me gusta pasar tiempo con mis amigos, familia y mi pareja")}
      />

      <TarjetaHobby 
        titulo="Entretenimiento y juegos"
        descripcionCorta="Series y videojuegos"
        icono="musical-notes-outline"
        onPress={() => Alert.alert("Detalle de Hobby", "me encanta ver seriesen Netflix y juegar videojuegos con mi pareja como Free Fire")}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f8fafc' },
  contenido: { padding: 20 },
  headerIcon: { alignItems: 'center', marginBottom: 20 },
  tituloPrincipal: { fontSize: 20, fontWeight: 'bold', color: '#1e293b', marginTop: 8 }
});