package fr.accountbackend.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
/** This is the primary spring security annotation that is used to enable web security in a project. */
@EnableWebSecurity
/** This is used to enable method level security based on annotations. 
 * You can use following three types of annotations for securing your methods 
 * see https://www.callicoder.com/spring-boot-spring-security-jwt-mysql-react-app-part-2/#2-enableglobalmethodsecurity - */
@EnableGlobalMethodSecurity(
        securedEnabled = true,
        jsr250Enabled = true,
        prePostEnabled = true
)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    /**
     * To authenticate a User or perform various role-based checks, Spring security needs to load users details somehow.
     * For this purpose, It consists of an interface called UserDetailsService which has a single method that loads a user based on username-
     * We’ll define a CustomUserDetailsService that implements UserDetailsService interface 
     * and provides the implementation for loadUserByUsername() method.
     * Note that, the loadUserByUsername() method returns a UserDetails object that Spring Security uses 
     * for performing various authentication and role based validations.
     */
    @Autowired
    CustomUserDetailsService customUserDetailsService;

    /**
     * This class is used to return a 401 unauthorized error to clients that try to access a protected 
     * resource without proper authentication. 
     * It implements Spring Security’s AuthenticationEntryPoint interface.
     */
    @Autowired
    private JwtAuthenticationEntryPoint unauthorizedHandler;

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter();
    }

    /**
     * AuthenticationManagerBuilder is used to create an AuthenticationManager instance which is the main Spring Security interface for authenticating a user.
     * You can use AuthenticationManagerBuilder to build in-memory authentication, LDAP authentication, JDBC authentication, or add your custom authentication provider.
     * In our example, we’ve provided our customUserDetailsService and a passwordEncoder to build the AuthenticationManager.
     * We’ll use the configured AuthenticationManager to authenticate a user in the login API.
     */
    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder
                .userDetailsService(customUserDetailsService)
                .passwordEncoder(passwordEncoder());
    }

    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors()
                    .and()
                .csrf()
                    .disable()
                .exceptionHandling()
                    .authenticationEntryPoint(unauthorizedHandler)
                    .and()
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                    .and()
                .authorizeRequests()
                    .antMatchers("/",
                        "/favicon.ico",
                        "/**/*.png",
                        "/**/*.gif",
                        "/**/*.svg",
                        "/**/*.jpg",
                        "/**/*.html",
                        "/**/*.css",
                        "/**/*.js")
                        .permitAll()
                    .antMatchers("/api/auth/**")
                        .permitAll()
                    .antMatchers("/api/user/checkUsernameAvailability", "/api/user/checkEmailAvailability")
                        .permitAll()
                    .antMatchers(HttpMethod.GET, "/api/polls/**", "/api/users/**")
                        .permitAll()
                    .anyRequest()
                        .authenticated();

        // Add our custom JWT security filter
        http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);

    }
}