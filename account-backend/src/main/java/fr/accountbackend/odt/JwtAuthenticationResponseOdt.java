package fr.accountbackend.odt;

public class JwtAuthenticationResponseOdt {
    private String accessToken;
    private String tokenType = "Bearer";

    public JwtAuthenticationResponseOdt(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }
}