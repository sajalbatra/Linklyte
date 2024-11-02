import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, TouchableOpacity, Alert,ImageBackground } from 'react-native';
import GradientText from '../../hooks/useGradientText.js';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { weburl } from '../../constants/constant.js';
import axios from 'axios';
import {Clipboard} from 'react-native';
import image from "../../assets/Cubes.png"

const index = () => {
    const [url, setUrl] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState('');

    const handleChangeText = (text) => {
        setUrl(text);
    };

    const handleSubmit = async () => {
        if (!url) { 
            Alert.alert('Please enter a URL'); 
            return; 
        }
        const backendurl = `${weburl}/url`;
        console.log(backendurl);
        try {
            const response = await axios.post(backendurl, { url });
            setResponseData(response.data);
            setError('');
        } catch (err) {
            const errorMessage = axios.isAxiosError(err) 
                ? err.response?.data?.error || err.message 
                : 'Unexpected error occurred.';
            console.error("Error details:", errorMessage);
            setError(`Error: ${errorMessage}`);
        }
    };

    const copyToClipboard = () => {
        if (responseData && responseData.id) {
            Clipboard.setString(responseData.id);
            Alert.alert("Copied!", "The shortened URL has been copied to your clipboard.");
        } else {
            Alert.alert("No URL to copy", "Please shorten a URL first.");
        }
    };
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topLeft}>
                <GradientText text="Linklyte" />
            </View>
            <ImageBackground source={image} resizeMode="cover">
            <View style={styles.container}>
                <View style={styles.center}>
                    <GradientText text="Shorten Your Loooong Links :)" />
                </View>
                <Text style={styles.description}>
                    Linklyte is an efficient and easy-to-use URL shortening service that streamlines your online experience.
                </Text>
                <View style={styles.inputContainer}>
                    <Entypo name="link" size={24} color="white" />
                    <TextInput
                        placeholder="Enter the Link here"
                        placeholderTextColor="#ccc"
                        value={url}
                        onChangeText={handleChangeText}
                        style={styles.textInput}
                    />
                    <TouchableOpacity onPress={handleSubmit}>
                        <AntDesign name="arrowright" size={24} color="white" style={{ backgroundColor: "#144EE3", borderRadius: 45, padding: 5 }} />
                    </TouchableOpacity>
                </View>
                {responseData && responseData.id && (
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultText}>Shortened URL: {responseData.id}</Text>
                        <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
                            <Text style={styles.copyButtonText}>Copy to Clipboard</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                
            </View>
            </ImageBackground>
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
    copyButton: {
        backgroundColor: "#144EE3",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    copyButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default index;
