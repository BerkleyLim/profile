package profile.back.domain.entity;

import java.io.Serializable;
import java.util.Collection;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
// mysql과 oracle에서는 table은 필요 없지만 mariadb에서는 대소문자 구별하므로 설정
@Table(name = "member")
@DynamicInsert
@DynamicUpdate
@Data
// @JsonInclude(Include.NON_NULL)
@JsonInclude(Include.NON_DEFAULT)
public class Member implements Serializable, UserDetails {
        private static final long serialVersionUID = 1L;

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long mno;

        @Column(name = "id", /* length = 100 */ columnDefinition = "varchar(45)")
        String id;

        @Column(name = "password", /* length = 100 */ columnDefinition = "varchar(45)")
        String password;

        // @Column(name = "nick_name")
        // String nick_name;

        @Column(name = "name")
        String name;

        @Column(name = "role_user")
        String role_user;
        // @Column(name = "activated")
        // private boolean activated;

        // 참조 : https://jooky.tistory.com/5
        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
                // TODO Auto-generated method stub
                throw new UnsupportedOperationException("Unimplemented method 'getAuthorities'");
                // return this.roles.stream()
                // .map(SimpleGrantedAuthority::new)
                // .collect(Collectors.toList());
        }

        @Override
        public String getUsername() {
                // TODO Auto-generated method stub
                // throw new UnsupportedOperationException("Unimplemented method
                // 'getUsername'");
                return id;
        }

        @Override
        public boolean isAccountNonExpired() {
                // TODO Auto-generated method stub
                // throw new UnsupportedOperationException("Unimplemented method
                // 'isAccountNonExpired'");
                return true;
        }

        @Override
        public boolean isAccountNonLocked() {
                // TODO Auto-generated method stub
                // throw new UnsupportedOperationException("Unimplemented method
                // 'isAccountNonLocked'");
                return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
                // TODO Auto-generated method stub
                // throw new UnsupportedOperationException("Unimplemented method
                // 'isCredentialsNonExpired'");
                return true;
        }

        @Override
        public boolean isEnabled() {
                // TODO Auto-generated method stub
                // throw new UnsupportedOperationException("Unimplemented method 'isEnabled'");
                return true;
        }

}