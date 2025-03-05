import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = "http://192.168.0.102:3000"; 

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const checkAuthentication = async () => {
        try {
            // First, check if token exists
            const token = await AsyncStorage.getItem("token");
            if (!token) {
                setIsLoading(false);
                return;
            }

            // Validate token by fetching user data
            const response = await axios.get(`${API_URL}/user`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            // If user data is successfully fetched, set authenticated state
            setUser(response.data);
            setIsAuthenticated(true);
        } catch (error) {
            // If token validation fails, remove token and show login screen
            console.error("Authentication failed:", error);
            await AsyncStorage.removeItem("token");
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${API_URL}/login`, { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            
            // Fetch and set user data after successful login
            const userResponse = await axios.get(`${API_URL}/user`, {
                headers: { Authorization: `Bearer ${response.data.token}` },
            });
            
            setUser(userResponse.data);
            setIsAuthenticated(true);
        } catch (error) {
            Alert.alert("Login Failed", "Invalid credentials");
        }
    };

    const handleLogout = async () => {
        await AsyncStorage.removeItem("token");
        setUser(null);
        setIsAuthenticated(false);
    };

    useEffect(() => {
        checkAuthentication();
    }, []);

    // Show loading screen while checking authentication
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    // Render either welcome screen or login screen based on authentication state
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
            {isAuthenticated ? (
                <View>
                    <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 20 }}>
                        Welcome, {user.name}
                        type: {user.type}
                    </Text>
                    <Button title="Logout" onPress={handleLogout} />
                </View>
            ) : (
                <View>
                    <Text style={{ color: 'red', marginBottom: 10 }}>Username:</Text>
                    <TextInput 
                        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
                        value={email} 
                        onChangeText={setEmail} 
                        placeholder="Enter email"
                    />
                    <Text>Password:</Text>
                    <TextInput 
                        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
                        value={password} 
                        onChangeText={setPassword} 
                        secureTextEntry 
                        placeholder="Enter password"
                    />
                    <Button title="Login" onPress={handleLogin} />
                </View>
            )}
        </View>
    );
};

export default LoginScreen;