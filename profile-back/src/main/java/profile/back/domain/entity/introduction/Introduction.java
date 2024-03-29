package profile.back.domain.entity.introduction;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "introduction")
@DynamicInsert
@DynamicUpdate
public class Introduction implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ino;

    @Column(/* name = "title", */ /* length = 100 */ columnDefinition = "varchar(100)")
    String title;

    @Column(columnDefinition = "text")
    String contents;

    // 여기서 변수에 SQL 문에 예약어가 들어가면 에러남
    @Column(nullable = false, columnDefinition = "Integer default 0")
    long viewNumber;

}
