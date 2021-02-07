import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native"
import { categoryList, colorList, jobList } from '../../dummy';


export const HomeScreen = () => {
    return <View>
        <HomeHeader />
        <ScrollView>
            <Image style={styles.banner} source={{ uri: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=4350&q=80" }} />
            <CategoryContainer />
            <JobListingContainer />
            <View style={styles.fakeBottom} />
        </ScrollView>

    </View>
}

const HomeHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Image style={styles.logo} source={require("./../../assets/img/logo.png")} />
            <Text style={styles.title}>Paññāsāstra Career</Text>
        </View>
    )
}

const CategoryContainer = () => {
    return (
        <View>
            <Text style={styles.labelCategory}>Category</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryButtonContainer}>
                    {
                        categoryList.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={[styles.buttonCategory, { backgroundColor: colorList[index] }]}>
                                    <Text style={styles.categoryTitle}>{item.name}</Text>
                                    <View style={styles.categoryIconContainer}>
                                        <Image style={styles.categoryIcon} source={item.icon} />
                                        <Text style={styles.jobCount}>{item.jobs}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const JobListingContainer = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text style={styles.labelCategory}>Available Jobs</Text>
            <View style={styles.jobListingContainer}>
                {jobList.map((item, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Detail",item)}
                            style={styles.jobContainer}
                            key={index}>
                            <View style={styles.jobHeader}>
                                <Image style={styles.jobCover} source={{ uri: item.coverImage }} />
                                <View style={styles.companyInfoContainer}>
                                    <View style={styles.companyDetailContainer}>
                                        <Image style={styles.logoCompany} source={item.companyLogo} />
                                        <Text style={styles.companyName}>{item.companyName}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.jobDescriptionContainer}>
                                <View style={styles.jobTitleContainer}>
                                    <Text style={styles.jobTitle}>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.jobSalary}>
                                        ${item.salary}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.jobCategory}>{item.category}</Text>
                                </View>

                                <View style={styles.qualificationContainer}>
                                    <Text style={styles.textQualification}>Degree: {item.degree},</Text>
                                    <Text style={styles.textQualification}>Age: {item.age},</Text>
                                    <Text style={styles.textQualification}>Experience: {item.exp},</Text>
                                    <Text style={styles.textQualification}>language: {item.language},</Text>
                                    <Text style={styles.textQualification}> Closing: {item.closingDate}</Text>

                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}


const layout = 15
const fullscreen = Dimensions.get('window').width

const styles = StyleSheet.create({
    textQualification: {
        marginRight: layout / 2,
        marginTop: layout / 2
    },
    qualificationContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    jobCategory: {
        marginTop: layout / 2
    },
    jobSalary: {
        fontWeight: "bold",
        fontSize: layout * 1.2,
        color: "#555"
    },
    jobTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between"

    },
    jobTitle: {
        fontSize: layout * 1.2
    },
    jobDescriptionContainer: {
        padding: layout
    },
    fakeBottom: {
        height: layout * 5,
    },
    companyName: {
        color: "#fff",
        marginLeft: layout,
        fontSize: layout * 1.4,
        fontWeight: "bold"
    },
    companyDetailContainer: {
        flexDirection: 'row',
        alignItems: "center"
    },
    jobHeader: {
        width: fullscreen - layout * 2,
        height: (fullscreen - layout * 2) / 2.5,
    },
    logoCompany: {
        width: layout * 3,
        height: layout * 3
    },
    companyInfoContainer: {
        position: "absolute",
        zIndex: 5,
        width: fullscreen - layout * 2,
        height: (fullscreen - layout * 2) / 2.5,
        alignItems: 'flex-end',
        flexDirection: 'row',
        padding: layout
    },
    jobListingContainer: {
        marginLeft: layout
    },
    jobContainer: {
        width: fullscreen - layout * 2,
        borderRadius: layout / 2,
        overflow: "hidden",
        marginBottom: layout,
        borderWidth: 1,
        borderColor: "#999"
    },
    jobCover: {
        width: fullscreen - layout * 2,
        height: (fullscreen - layout * 2) / 2.5,
    },
    jobCount: {
        fontSize: layout + 3,
        color: "#fff"
    },
    categoryIconContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categoryIcon: {
        width: layout * 4.5,
        height: layout * 4.5
    },
    categoryTitle: {
        fontSize: layout * 1.2,
        color: "#fff",
        fontWeight: "bold",
    },
    categoryButtonContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: layout
    },
    buttonCategory: {
        width: (fullscreen - (layout * 4)) / 2.2,
        height: (fullscreen - (layout * 4)) / 2.1,
        borderRadius: layout / 1.5,
        marginRight: layout,
        padding: layout,
        justifyContent: 'space-between'
    },
    labelCategory: {
        fontSize: layout,
        marginVertical: layout,
        marginLeft: layout,
        fontWeight: 'bold'

    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: layout / 2,
        paddingLeft: layout / 2,

    },
    title: {
        marginLeft: layout / 2,
        fontSize: layout * 1.3,
        fontWeight: "bold"
    },
    logo: {
        width: layout * 3,
        height: layout * 3
    },
    banner: {
        width: fullscreen,
        height: fullscreen / 2.5
    }

})
