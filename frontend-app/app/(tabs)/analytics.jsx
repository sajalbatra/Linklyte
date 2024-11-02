import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import GradientText from '../../hooks/useGradientText.js'; // Ensure this hook is properly defined
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { weburl } from '../../constants/constant.js'; // Ensure this constant is defined
import axios from 'axios';

const AnalyticsPage = () => {
    const [url, setUrl] = useState('');
    const [clicks, setClicks] = useState(null);
    const [error, setError] = useState('');

    const handleChangeText = (text) => {
        setUrl(text);
    };

    const handleSubmit = async () => {
      if (!url) { 
        Alert.alert('Please enter a URL'); 
        return; 
    }
        const backendurl = `${weburl}/analytics?url=${encodeURIComponent(url)}`;
        console.log(backendurl);
        try {
            const response = await axios.get(backendurl);
            setClicks(response.data.visit); // Assuming the API returns an object with totalClicks
            setError('');
        } catch (err) {
            const errorMessage = axios.isAxiosError(err) 
                ? err.response?.data?.error || err.message 
                : 'Unexpected error occurred.';
            console.error("Error details:", errorMessage);
            setError(`Error: ${errorMessage}`);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topLeft}>
                <GradientText text="Linklyte Analytics" />
            </View>
            <View style={styles.container}>
                <View style={styles.center}>
                    <GradientText text="Get Total Clicks for Your URL" />
                </View>
                <Text style={styles.description}>
                    Enter your shortened URL to see how many clicks it has received.
                </Text>
                <View style={styles.inputContainer}>
                    <Entypo name="link" size={24} color="white" />
                    <TextInput
                        placeholder="Enter the Shortened URL here"
                        placeholderTextColor="#ccc"
                        value={url}
                        onChangeText={handleChangeText}
                        style={styles.textInput}
                    />
                    <TouchableOpacity onPress={handleSubmit}>
                        <AntDesign name="arrowright" size={24} color="white" style={{ backgroundColor: "#144EE3", borderRadius: 45, padding: 5 }} />
                    </TouchableOpacity>
                </View>
                {clicks !== null && (
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultText}>Total Clicks: {clicks}</Text>
                    </View>
                )}
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0B101B',
        padding: 20,
        top: 30,
    },
    container: {
        top: 60,
    },
    topLeft: {
        marginBottom: 10,
        top: 5,
    },
    center: {
        marginBottom: 20,
    },
    description: {
        color: "white",
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        borderWidth: 1,
        borderColor: "#353C4A",
        backgroundColor: '#1A1E29',
        borderRadius: 45,
        paddingHorizontal: 10,
        gap: 10,
    },
    textInput: {
        flex: 1,
        height: 60,
        color: 'white',
    },
    resultContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    resultText: {
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default AnalyticsPage;
